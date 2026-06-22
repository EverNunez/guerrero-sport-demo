# Guía de despliegue — Guerrero Sport (VPS Contabo + Nginx + PM2)

Aplicación **Next.js 14** (App Router). Se sirve con `next start` detrás de Nginx
como reverse proxy, con SSL de Let's Encrypt y gestionada por PM2.

---

## 1. Variables de entorno

Crear `.env.production` en la raíz del proyecto:

```env
# URL pública real (afecta SEO, Open Graph, robots y sitemap)
NEXT_PUBLIC_SITE_URL=https://guerrerosport.com.py

# Puerto interno donde escucha Next (Nginx hace proxy a este puerto)
PORT=3000
NODE_ENV=production
```

> No hay base de datos ni secretos: el panel `/admin` guarda los datos en el
> navegador (localStorage). No se requieren más variables.

---

## 2. Requisitos del VPS

- Contabo VPS S o superior (2 vCPU / 4 GB RAM es de sobra).
- Ubuntu 22.04 LTS.
- Accesos: usuario con sudo, dominio apuntando (registro A) a la IP del VPS.

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nginx ufw
sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw enable
```

---

## 3. Node.js (LTS) + PM2

```bash
# Node 20 LTS vía nvm (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20 && nvm use 20 && nvm alias default 20

npm install -g pm2
```

---

## 4. Clonar y compilar

```bash
cd /var/www
git clone https://github.com/EverNunez/guerrero-sport-demo.git guerrero-sport
cd guerrero-sport
# crear el .env.production (paso 1)
npm ci
npm run build
```

---

## 5. PM2

```bash
pm2 start npm --name "guerrero-sport" -- start
pm2 save
pm2 startup    # ejecutar el comando que imprime, para arranque automático
```

Actualizaciones futuras:

```bash
cd /var/www/guerrero-sport
git pull
npm ci
npm run build
pm2 restart guerrero-sport
```

---

## 6. Nginx (reverse proxy)

`/etc/nginx/sites-available/guerrero-sport`:

```nginx
server {
    listen 80;
    server_name guerrerosport.com.py www.guerrerosport.com.py;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache de imágenes y assets de Next
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/guerrero-sport /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

## 7. SSL (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d guerrerosport.com.py -d www.guerrerosport.com.py
# Certbot agrega el bloque 443 y configura la renovación automática.
sudo certbot renew --dry-run
```

---

## 8. Estructura final en el VPS

```
/var/www/guerrero-sport/
├── .next/            # build de producción (generado por npm run build)
├── public/           # imágenes optimizadas, logos, favicon, og-image
├── app/ components/ lib/ scripts/
├── .env.production   # NEXT_PUBLIC_SITE_URL, PORT
└── package.json
```

Flujo: navegador → Nginx (443/SSL) → proxy → Next (`next start` en :3000, PM2).

---

## Checklist final

- [ ] Dominio con registro A → IP del VPS.
- [ ] `.env.production` con `NEXT_PUBLIC_SITE_URL` real.
- [ ] `npm ci && npm run build` sin errores.
- [ ] PM2 corriendo y `pm2 save` + `pm2 startup`.
- [ ] Nginx proxy OK (`nginx -t`).
- [ ] SSL emitido y renovación automática verificada.
- [ ] Probar: home, /admin (login admin/guerrero2025), robots.txt, sitemap.xml.
