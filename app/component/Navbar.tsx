const Navbar = () => {
    return (
        <div className=" flex justify-between gap-2 capitalize px-52">
            <div className="">
                <p className="px-2 py-2">company name</p>
            </div>
            <div className="flex gap-2 ">
                <p className="px-2 py-2">home</p>
                <p className="px-2 py-2">products</p>
                <p className="px-2 py-2">contact us</p>
            </div>
        </div>
    )
}

export default Navbar