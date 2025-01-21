import { PrismaClient } from "@prisma/client";
import { DisconnectPrismaClient } from "../src/utils/prisma";
import { CreateFranchiseDTO } from "../src/dto/franchises/create-franchise.dto";

const prisma = new PrismaClient();


async function main(callback: () => void) {
    await SeedFranchise()
    callback();
}


const SeedFranchise = async () => {

    console.log("Starting Seed Role")

    const franchise: CreateFranchiseDTO = {
        "name": "Best Franchise Ever",
        "address": "123 Main Street, Anytown, USA",
        "country": "USA",
        "siret": "12345678901234"
    }
    let findExisting = await prisma.franchises.findFirstOrThrow({
        where: {
            country: "USA",
        }
    })
    if (findExisting) return;
    const createdFranchise = await prisma.franchises.create({ data: franchise })
    console.log("Franchise Seeding Success")
}


main(() => DisconnectPrismaClient(prisma)).then(r => console.log("Seed Success")).catch(e => console.log(e))
