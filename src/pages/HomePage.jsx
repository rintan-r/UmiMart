import Header from "../Components/Header";
import CardPromo from "../Components/CardPromo";
import SearchBar from "../Components/SearchBar";
import CardProduct from "../Components/CardProduct";
import Category from "../Components/Category";
import Filter from "../Components/filter";

function HomePage() {
    return (
        <div>
            {/* Header : sm */}
            <Header />

            {/* Content : sm */}
            <div className="flex flex-col space-y-[36px] p-4 h-auto">

                {/* Promo Card : sm */}
                <CardPromo />

                {/* Search Bar : sm */}
                <SearchBar />

                {/* Filter and Recommendation : sm */}
                <div className="flex flex-row justify-between h-auto">
                    <Category />
                    <Filter />
                </div>

                {/* Product Card : sm */}
                <div className="w-full grid grid-cols-2 gap-4">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />

                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;