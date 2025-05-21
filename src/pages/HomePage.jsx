import Header from "../Components/header";

function HomePage() {
    return (
        <div>
            {/* Header : sm */}
            <Header />

            {/* Content : sm */}
            <div className="flex flex-col space-y-[36px] m-4 w-auto h-auto bg-blue-600 py-6">

                {/* Promo Card : sm */}
                <div className="bg-gray-300 h-[263px]">

                </div>

                {/* Search Bar : sm */}
                <div className="bg-gray-300 py-14 h-14">

                </div>

                {/* Filter and Recommendation : sm */}
                <div className="bg-gray-300 h-8">

                </div>

                {/* Product Card : sm */}
                <div className="bg-gray-300 h-[1882px] flex flex-row space-x-4">
                    <div className="bg-gray-500 w-3/6">
                        test
                    </div>
                    <div className="bg-gray-500 w-3/6">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;