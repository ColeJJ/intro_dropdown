import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="flex justify-between p-5">
            {/* nav */}
            <div className="flex items-center space-x-11">
                {/* logo */}
                <h1 className="size-medium inline-flex text-4xl font-bold">snap</h1>

                {/* nav */}
                <div className="hidden items-center space-x-8 md:flex">
                    <h3>
                        Features <FontAwesomeIcon icon={faAngleDown} />
                    </h3>
                    <h3>
                        Company <FontAwesomeIcon icon={faAngleDown} />
                    </h3>
                    <h3>Careers</h3>
                    <h3>About</h3>
                </div>
            </div>

            {/* login / register */}
            <div className="flex items-center space-x-8">
                <h3 className="">Login</h3>
                <h3 className="rounded-3xl border-2 px-4 py-2">Register</h3>
            </div>
        </header>
    )
}

export default Header
