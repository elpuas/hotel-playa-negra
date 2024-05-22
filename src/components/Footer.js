export default function Footer() {
    return (
        <footer className="bg-[#2574a9] fullscreen -mx-8">
            <div className="max-w-[1170px] mx-auto p-4 flex">
                <div className="flex-1">
                    <p>Contact</p>
                </div>
                <div className="flex-1">
                    <p>More Information</p>
                </div>
                <div className="flex-1">
                    <p>Activities</p>
                </div>
            </div>
            <div className="w-full mx-auto p-4 bg-[#121a26]">
                <div className="max-w-[1170px] mx-auto p-4 flex">
                    <div className="w-2/3">
                        <p className="text-[#b6c0ce] text-sm mb-1 leading-[26px]">
                            © Copyright { new Date().getFullYear() } - Hotel Playa Negra   | Web Crafted by <a className="text-white" href="https://www.elpuas.com/" target='_blank'>el.puas( ♥️ );</a><br />
                            Photography: Erez Sabag, Alfonso Petrirena, Anne-Marie Fox, Oliver Pilcher, <a className="text-white" href="https://www.instagram.com/recorriendola/" target="_blank">@recorriendo olas</a>, <a className="text-white" href="https://worldclasssurftrips.com/" target="_blank">worldclasssurfing.com</a>
                        </p>
                    </div>
                    <div className="w-1/3"></div>
                </div>
            </div>
        </footer>
    )
}
