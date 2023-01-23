import Image from 'node_modules/next/image'

const BlogProfile = ({profile,username,lastupdated,name}) => {
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image src={profile} alt={'artist profile'} objectfit={'container'} />
                </div>
                <div className="flex flex-col justify-center ml-2">
                    <div className="font-primary font-bold text-lg">{name}</div>    
                    <div className="font-primary text-sm text-gray-500">{lastupdated}</div> 
                </div> 
            </div>
        </div>           
    </div>
  )
}

export default BlogProfile