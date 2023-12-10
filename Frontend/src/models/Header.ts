
// Validate header content in constant.ts file

import { Head } from "next/document"

interface HeaderItems {
    label: string,
    page: string
}

export interface NavItems {
    home: HeaderItems,
    about: HeaderItems,
    language:HeaderItems,
    projects: HeaderItems,
}