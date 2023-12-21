import { Outlet } from "react-router-dom"

export const RootLayout = () => {

    return (
        <>
            <div className="heading">
                <h1>Animal CRUD</h1>
                <p>With sort option</p>
                <p>and Redux</p>
            </div>
            <br />
            <main>
                <Outlet />
            </main>
        </>
    )
}