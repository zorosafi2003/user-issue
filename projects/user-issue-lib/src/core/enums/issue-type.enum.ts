import { EnumDto } from "../dtos/enum.dto";

export enum IssueTypeEnum{
    Task = 0,
    Bug = 1
}

export function getIssueTypeArr(): EnumDto[] {
    const arr: EnumDto[] = []

    for (const [propertyKey, propertyValue] of Object.entries(IssueTypeEnum)) {
        if (!Number.isNaN(Number(propertyKey))) {
            continue;
        }
        arr.push({ id: propertyValue, name: propertyKey });
    }

    return arr;
}