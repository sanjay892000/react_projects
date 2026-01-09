import NewCollections from '../assets/new_collections'
import ShowCollection from './ShowCollection'

function NewCollection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase">New Collection</h2>
                <div className="w-24 h-1 bg-black mx-auto mt-3"></div>
            </div>

            {/* Product Grid */}
            <ShowCollection collection={NewCollections} />
        </section>
    )
}

export default NewCollection
