import { motion } from "framer-motion";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CATEGORY_DATA } from "../../data/category";

const CategoryDistributionChart = () => {
    return (
        <motion.div
            className="bg-gray-800/100 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie
                            data={CATEGORY_DATA}
                            dataKey="value"
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={false}
                            outerRadius={100}
                            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {CATEGORY_DATA.map((item, idx) => (
                                <Cell key={idx} fill={item.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default CategoryDistributionChart