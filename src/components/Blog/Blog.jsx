import SectionHeader from "../SectionHeader/SectionHeader";
import blog1 from '../../assets/images/post-thumbnail-1.jpg'
import blog2 from '../../assets/images/post-thumbnail-2.jpg'
import blog3 from '../../assets/images/post-thumbnail-3.jpg'

const Blog = () => {
    return (
        <div className="my-10 ">
            <SectionHeader title={'Our Blog'}></SectionHeader>
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
                      <div className="p-5 border rounded-lg border-black">
                        <img src={blog1} alt="" />
                        <h2 className="text-2xl font-bold ">Top 10 casual look ideas to dress up your kids</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at ea tempora ut eos sed reprehenderit harum placeat rerum hic!</p>
                      </div>
                      <div className="p-5 border rounded-lg border-black">
                        <img src={blog2} alt="" />
                        <h2 className="text-2xl font-bold ">Latest trends of wearing street wears supremely</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at ea tempora ut eos sed reprehenderit harum placeat rerum hic!</p>
                      </div>
                      <div className="p-5 border rounded-lg border-black">
                        <img src={blog3} alt="" />
                        <h2 className="text-2xl font-bold ">10 Different Types of comfortable clothes ideas for women</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at ea tempora ut eos sed reprehenderit harum placeat rerum hic!</p>
                      </div>
            </div>
            
        </div>
    );
};

export default Blog;