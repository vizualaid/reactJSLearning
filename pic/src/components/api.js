import axios from 'axios';
const SearchTerm=async(term)=>{
   const img=  axios.get('https://api.unsplash.com/'),
   {
    headers:{
        Authorization:'Client-ID 6xPb47VZu0dlPW0vnnVwim2_ZS5NHWtbUflB-U_vnsBw'
    },
    query:{
        term
    }
    
   }
}