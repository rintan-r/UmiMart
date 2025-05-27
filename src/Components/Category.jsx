import { ChevronDownIcon } from "@heroicons/react/16/solid";

function Category() {
    return (
        <div className="">
            <div className="flex flex-row py-2 gap-2">
                <span className="caption">Rekomendasi untukmu</span>
                <ChevronDownIcon className="w-4 h-4" />
            </div>
        </div>
    )
}

export default Category;