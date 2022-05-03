import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

/**
 * 1. position icons arrows (next to Features and Company)
 * 2. position snap logo into center
 */

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
                        Features{' '}
                        <Image
                            className="flex items-center"
                            src="/images/icon-arrow-down.svg"
                            width={10}
                            height={6}
                        />
                    </h3>
                    <h3>
                        Company <Image src="/images/icon-arrow-down.svg" width={10} height={6} />
                    </h3>
                    <h3>Careers</h3>
                    <h3>About</h3>
                </div>
            </div>

            {/* login / register */}
            <div className="flex items-center space-x-8">
                <h3 className="">Login</h3>
                <h3 className="rounded-2xl border-2 border-slate-900 px-6 py-2">Register</h3>
            </div>
        </header>
    )
}

export default Header
