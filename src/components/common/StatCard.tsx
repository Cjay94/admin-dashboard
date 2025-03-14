import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";


const StatCard = ({ name, icon: Icon, value, color }: { name: string; icon: LucideIcon; value: string; color: string }) => {
    return (
        <motion.div className="bg-gray-800/100 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700">
            <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-gray-400">
                    <Icon size={20} className="mr-2" style={{ color }} />
                    {name}
                </span>
                <p className="mt-1 text-3xl font-semibold text-gray-100">{value}</p>
            </div>
        </motion.div>
    )
}

export default StatCard