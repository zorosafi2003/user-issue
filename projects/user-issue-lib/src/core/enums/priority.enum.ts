import { Observable } from "rxjs";
import { of } from "rxjs/internal/observable/of";
import { EnumDto } from "../dtos/enum.dto";

export enum PriorityEnum {
    Highest = 4,
    High = 3,
    Medium = 2,
    Low = 1,
    Lowest = 0
}

export function getPriorityArr(): EnumDto[] {
    const arr: EnumDto[] = []

    for (const [propertyKey, propertyValue] of Object.entries(PriorityEnum)) {
        if (!Number.isNaN(Number(propertyKey))) {
            continue;
        }
        arr.push({ id: propertyValue, name: propertyKey });
    }

    return arr;
}