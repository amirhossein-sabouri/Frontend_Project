document.addEventListener('alpine:init', () => {
    Alpine.data('userData', () => function(){
        return{
            mainUsers:[],
            users:[],
            pageUsers :[],
            isLoading:false,
            showAddModal:false,
            pageCount: 1,
            itemsCount : 4,
            currentPage : 1,
            newUserInfo:{
                name:"",
                username:"",
                email:"",
            },
            getUsers(){
                this.isLoading = true,
                axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
                    this.mainUsers = res.data;
                    this.users = res.data;
                    this.pagination();
                }).catch(error=>{
                    console.log(error.message);
                }).finally(()=>{
                    this.isLoading = false;
                })
            },
            pagination(){
                this.pageCount = Math.ceil(this.users.length/ this.itemsCount); 
                const start = (this.currentPage * this.itemsCount) - this.itemsCount;
                const end = (this.currentPage * this.itemsCount);
                this.pageUsers = this.users.slice(start,end);
                console.log(this.pageUsers);
                
            },
            nextPage(){
                this.currentPage++;
                if(this.currentPage > this.pageCount){
                    this.currentPage = this.pageCount;
                }
                this.pagination();
            },
            prevPage(){
                this.currentPage--;
                if(this.currentPage < 1){
                    this.currentPage = 1;
                }
                this.pagination();
            },
            handleChangeItemsCount(e){
                this.itemsCount = e.value;
                if(this.itemsCount < 1) this.itemsCount = 1;
                if (this.itemsCount > this.users.length) this.itemsCount = this.users.length;

                console.log(e.value);
                this.currentPage = 1;
                this.pagination();
                // if(value < 1) this.itemsCount = 1;
                // if(value > this.users.length) this.itemsCount = this.users.length;   
                
            },
            handleSearch(value){
                // setTimeout(() => {
                //     this.users = this.mainUsers.filter(user=>user.name.includes(e.value) || user.username.includes(e.value) ||
                //      user.email.includes(e.value));
                //     this.currentPage = 1;
                //     this.pagination();
                // },100);
                this.users = this.mainUsers.filter(user=>user.name.includes(value) || user.username.includes(value) ||
                user.email.includes(value));
               this.currentPage = 1;
               this.pagination();
                
            },
            handleSubmitAddUserForm(){
                // console.log(this.newUserInfo);
                this.isLoading = true;
                axios.post("https://jsonplaceholder.typicode.com/users",this.newUserInfo).then((res)=>{
                    console.log(res);
                    
                }).catch(error=>{
                    console.log(error.message);
                }).finally(()=>{
                    this.isLoading = false;
                })
                
            }
            
        }
    })
})