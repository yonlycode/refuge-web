FROM node:lts as dependencies
WORKDIR /refugehulman
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /refugehulman
COPY . .
COPY --from=dependencies /refugehulman/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /refugehulman
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /refugehulman/next.config.js ./
COPY --from=builder /refugehulman/public ./public
COPY --from=builder /refugehulman/.next ./.next
COPY --from=builder /refugehulman/node_modules ./node_modules
COPY --from=builder /refugehulman/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]