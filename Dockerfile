# Two-stage build: compile the static Astro site with Node, serve dist/ with Caddy.
# A Dockerfile rather than Nixpacks so nothing is inferred (Nixpacks spotted the
# Caddyfile and installed a second Caddy that broke the old build).

# ---------- build ----------
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Also runs the SEO contract; a failing check stops the deploy.
RUN npm run build

# ---------- serve ----------
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
EXPOSE 3000
