import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar() {
    return (
        <div className="h-14 flex flex-row items-center p-4 w-full gap-2 bg-gray-100 rounded-3xl">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <input
                type="search"
                placeholder="Lagi butuh apa hari ini?"
                className=" w-full
                            placeholder: body-text
                "
            />
        </div>
    )
}

export default SearchBar;