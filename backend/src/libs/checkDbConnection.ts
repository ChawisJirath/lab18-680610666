// import PrismClient
import { PrismaClient } from "../../generated/prisma/client.ts";

const prisma = new PrismaClient();

export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    // Forces Prisma Client to establish a connection with the database
    await prisma.$connect();
    console.log("✅ Successfully connected to the database.");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  } finally {
    // Always disconnect after a manual health check script to free up the pool
    await prisma.$disconnect();
  }
}
