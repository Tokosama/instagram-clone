// /lib/keepAlivePrisma.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

startPrismaKeepAlive();
export function startPrismaKeepAlive() {
  // Ping quotidien (ou toutes les X minutes selon ton besoin)
  setInterval(async () => {
    try {
      await prisma.user.count();
      console.log("✅ Prisma keep alive", new Date().toISOString());
    } catch (err) {
      console.error("❌ Prisma ping failed:", err.message);
    }
  }, 60 * 60 ); // ici toutes les 24h
}
