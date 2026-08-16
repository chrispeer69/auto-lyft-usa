# Deterministic two-stage build: compile with Node, serve with Caddy.
#
# Using a Dockerfile rather than Nixpacks on purpose. Nixpacks auto-detects the
# Caddyfile and installs its own Caddy, which collided with the one we asked
# for and failed the build with "Unable to build profile. There is a conflict".
# Here nothing is inferred.

# ---------- build ----------
FROM node:20-alpine AS build
WORKDIR /app

# Vite inlines VITE_* values at BUILD time, so they must be present here, not
# just at runtime. Railway passes service variables in as build args.
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- serve ----------
FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

# Caddy's base image already runs:
#   caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
EXPOSE 3000
