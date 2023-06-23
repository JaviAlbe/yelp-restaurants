import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer VdQ_VQz5NJxp88xLTHpoWlyw6gMmxRTY3vszLfPFew-Y5bcwP-24-JpuSQ2jZ8wBFObb20fXV8t7W50VK-jyRWGbPSfp4KDqNsr2_lYb3Az1g3zx_09QRGdR9-uCZHYx'
    }

})