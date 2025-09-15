
function CardPromo() {
    return (
        <div className="h-[268px] flex flex-col justify-end">
            <div className="bg-gray-200 flex flex-col p-4 gap-4 rounded-3xl">
                <div className="flex flex-row relative">
                    <h3 className="heading-3 w-48">Gratis Ongkir Khusus Tanjung Senang!</h3>
                    <div className="bg-gray-300 w-[115px] h-[125px] absolute top-[-73px] right-0 rounded-[24px]"/>
                </div>
                <p className="body-text">Belanja Rp100.000? Yuk checkout sebelum promo berakhir!</p>
                <div className="flex flex-row gap-4">
                    <button className="bg-gray-300 py-2 px-4 rounded-[24px]">
                        <span className="button-text">Close</span>
                    </button>
                    <button className="bg-gray-900 py-2 px-4 rounded-[24px] w-full">
                        <span className="button-text text-white">Checkout Now!</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPromo;