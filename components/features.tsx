'use client'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Recycle, 
  Zap, 
  Users, 
  Heart, 
  Globe,
  Award,
  Shield
} from 'lucide-react'

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Sustainable Materials",
    description: "100% eco-friendly materials sourced responsibly from verified suppliers.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Circular Design",
    description: "Products designed for longevity and complete recyclability at end of life.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Carbon Neutral",
    description: "Zero carbon footprint through renewable energy and carbon offset programs.",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Impact",
    description: "Supporting local communities and fair trade practices worldwide.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Ethical Production",
    description: "Fair wages, safe working conditions, and ethical manufacturing processes.",
    color: "from-red-400 to-red-600"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "Contributing to global sustainability goals and environmental protection.",
    color: "from-teal-400 to-teal-600"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Quality",
    description: "Multiple certifications ensuring the highest standards of quality and sustainability.",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Transparent Supply Chain",
    description: "Complete visibility into our supply chain from source to final product.",
    color: "from-indigo-400 to-indigo-600"
  }
]

export default function Features() {
  return (
    <section 
      id="features"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
            Why Choose ColorGreen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sustainable Excellence in Every Detail
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine innovative design with environmental responsibility to create products that don't just look good—they do good.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join thousands of conscious consumers who are choosing sustainable style without compromising on quality or design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Explore Collection
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
