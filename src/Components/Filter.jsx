import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

function Filter() {
    return (
        <div className="">
            <div className="flex flex-row py-1 gap-2">
                <span className="caption">Filter</span>
                <AdjustmentsHorizontalIcon className="w-4 h-4" />
            </div>
        </div>
    )
}

export default Filter;