import Art from '@/Components/UI/Art';
const Gallery = () => {

  return (
    <section>
      <div className="relative h-[700vh] sm:h-[900vh] w-full bg-black/60 mt-20 z-20">
        <div className="h-[90vh] bg-black sticky top-0 flex flex-col justify-center items-center"><p className="text-lg">A few of my</p> <h2 className="text-7xl">Artworks</h2></div>
          <Art top='top-1/5' title='Title' size='20x30 inches' />
          <Art bottom='bottom-1/4' right='right-[500px]' title='Title' size='20x30 inches' />
          <Art top='top-[800px]' right='right-[150px]' title='Title' size='20x30 inches' />
          <Art top='top-1/2' left='left-[50px]' title='Title' size='20x30 inches' />
          <Art top='top-1/3' left='left-1/2' translate='-translate-x-1/2' title='Title' size='20x30 inches' />
          <Art bottom='bottom-1/5' right='right-[10px]' title='Title' size='20x30 inches' />
      </div>
    </section>
  )
}

export default Gallery
