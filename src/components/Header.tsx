import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MenuItemsProps {
    className?: string;
    asSheetClose?: boolean;
}
const MenuItems = ({ className, asSheetClose }: MenuItemsProps) => {
    const items = [
        { id: 1, href: "#home", label: "Home" },
        { id: 2, href: "#projects", label: "Projetos" },
        { id: 3, href: "#about", label: "Sobre Mim" },
        { id: 4, href: "#certificaties", label: "Certificados" },
        { id: 5, href: "#contacts", label: "Contato" },
    ];

    return (
        <ul className={cn("flex justify-between gap-4", className)}>
            {items.map((item) => (
                <li key={item.id}>
                    {asSheetClose ? (
                        <SheetClose asChild>
                            <Link href={item.href} className="font-semibold uppercase text-sm">
                                {item.label}
                            </Link>
                        </SheetClose>
                    ) : (
                        <Link href={item.href} className="font-semibold uppercase text-sm">
                            {item.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );

}

const Header = () => {
    return (
        <nav className="bg-accent w-full flex justify-end p-5">
            <MenuItems className="hidden md:flex" />

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon size={25} />
                    </Button>
                </SheetTrigger>

                <SheetContent >
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    <MenuItems className="flex-col pt-5" asSheetClose />
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export default Header;