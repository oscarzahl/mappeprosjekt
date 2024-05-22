import { PrismaClient } from "@prisma/client";

// Borrowed & modified from https://github.com/jenseng/abuse-the-platform/blob/main/app/utils/singleton.ts
// Thanks @jenseng!
export const singleton = <Value>(
  name: string,
  valueFactory: () => Value
): Value => {
  const g = global as unknown as { __singletons: Record<string, unknown> };
  g.__singletons ??= {};
  g.__singletons[name] ??= valueFactory();
  return g.__singletons[name] as Value;
};

export const prisma = singleton("prisma", () => new PrismaClient());

export const getAllCars = async () => {
  return await prisma.car.findMany();
};

export const getCarById = async (id: string) => {
  return await prisma.car.findFirst({
    where: {
      id,
    },
  });
};
