import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { SIDEBAR_ITEMS } from "../../data/sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    return (
        <motion.div
            className={`bg-yellow-50 relative z-10 transition-all duration-300 ease-in-out flex-shrink-0
                ${isSidebarOpen ? "w-64" : "w-20"}
                `}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className="h-full bg-gray-800/100 backdrop-blur-md p-4 flex flex-col border-r-gray-700">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                >
                    <Menu size={30} />
                </motion.button>

                <nav className="mt-4 grow">
                    {SIDEBAR_ITEMS.map((item, idx) => (
                        <Link key={idx} to={item.href}>
                            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-1">
                                <item.icon size={25} style={{ color: item.color, minWidth: "25px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>

        </motion.div>
    )
}

export default Sidebar