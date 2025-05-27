import React from "react";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

function Header() {
    return (
        <div className="h-20 flex justify-between flex-row p-4 w-full">
            <div className="flex flex-col gap-[5px]">
                <div>
                    <p className="body-text">Risya Pane</p>
                </div>
                <div className=" flex flex-row ">
                    <MapPinIcon className="w-4 h-4" />
                    <p className="caption">Tanjung Senang</p>
                </div>
            </div>
            <div className="space-x-1 flex flex-col justify-center">
                <Button
                    variant="iconLight"
                    icon={<ShoppingBagIcon className="w-6 h-6" />}
                    iconPosition="left"
                >
                    5
                </Button>
            </div>
        </div>
    )
}

export default Header;