

const Inventory = () => {
    return (
        <div className="inventory-page">
            <header>
                    <h1>Grocery List</h1>
                <div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Pantry</li>
                            <li>Recipes</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="wrapper">
                    <ul className="fridge-inventory">
                        {/* // li will be filled as the person inputs there stock */}
                    </ul>
                    <div>
                        <fieldset>
                            <form>
                                <label className="sr-only">Enter food</label>
                                <input type="text" />
                                <button>Add to the fridge</button>
                            </form>
                        </fieldset>
                    </div>
                </section>
                <section className="wrapper">
                    <ul className="pantry-inventory">

                    </ul>
                    <fieldset>
                            <form>
                                <label className="sr-only">Enter food</label>
                                <input type="text" />
                                <button>Add to the Pantry</button>
                            </form>
                        </fieldset>
                </section>
            </main>
        </div>
    )
} 

export default Inventory;