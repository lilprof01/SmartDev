import Art from '@/Components/UI/Art';
const Gallery = () => {

  return (
    <section>
      <div className="relative h-[700vh] sm:h-[900vh] w-full bg-white dark:bg-black/60 mt-20 z-20">
        <div className="h-[90vh] text-black dark:text-white dark:bg-black sticky top-0 flex flex-col justify-center items-center"><p className="text-lg">A few of my</p> <h2 className="text-7xl">Artworks</h2></div>
          <Art top='top-1/4 sm:top-1/5' title='Afloat' size='16x24 inches' bg="/Image.jpg" />
          <Art bottom='bottom-1/5 sm:bottom-1/4' right='lg:right-[500px] md:right-[350px] right-[0px]' title='Heritage' size='20x30 inches' bg='/Image1.jpg' />
          <Art top='top-[800px]' right='right-[0px] sm:right-[150px]' title='Nil' size='16x20 inches' bg='/Image2.jpg' />
          <Art top='top-1/2' left='left-[60px] sm:left-[50px]' title='Adumasha' size='22x30 inches' bg='/Image3.jpg' />
          <Art top='top-1/3' left='sm:left-1/2' translate='sm:-translate-x-1/2' title='Mercedes Dream' size='20x30 inches' bg='/Image4.jpg' />
          <Art bottom='bottom-1/9 sm:bottom-1/5' right='sm:right-[10px]' title='Nil' size='36x48 inches' bg='/Image5.jpg' />
          <Art bottom='bottom-1/3 sm:bottom-1/9' right='lg:right-[600px] md:right-[400px]' title='Olamide' size='16x20 inches' bg='/Image6.jpg' />
      </div>
    </section>
  )
}

export default Gallery
