# ---- stage build --------

FROM node:20.9.0-slim AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# ----- stage production ---------
FROM node:20.9.0-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copier package.json
COPY --from=builder /app/package.json ./

# Installer les dépendances de production
RUN npm install --production --frozen-lockfile

# Copier les fichiers buildés
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


EXPOSE 3000

CMD ["npm" , "start"]