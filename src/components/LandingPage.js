const LandingPage = () => {
    return (
        <div>
            <header>
                <h1>Grocery List</h1>
            </header>
            <main>
                <h2>Log in</h2>
                <section>
                    <fieldset>
                        <label className="sr-only">Enter User Name</label>
                        <input 
                            id="username"
                            type="text"
                            value={userInput}
                        />
                        <label className="sr-only">Enter Password</label>
                        <input
                        id="password"
                        type="text"
                        value={userInputPassword}
                        />
                    </fieldset>
                </section>
            </main>
        </div>
    )
}


export default LandingPage