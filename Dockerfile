FROM node:20-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_SITE_URL=https://tiibntick.yowyob.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ARG NEXT_PUBLIC_LINK_LANDING_URL=https://tiibntick-link.yowyob.com
ENV NEXT_PUBLIC_LINK_LANDING_URL=${NEXT_PUBLIC_LINK_LANDING_URL}
ARG NEXT_PUBLIC_LINK_REGISTER_URL=https://tiibntick-link.yowyob.com/register
ENV NEXT_PUBLIC_LINK_REGISTER_URL=${NEXT_PUBLIC_LINK_REGISTER_URL}
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
COPY --from=build /app/package.json /app/package-lock.json* ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.* ./
USER nextjs
EXPOSE 3000
CMD ["npm", "run", "start"]
