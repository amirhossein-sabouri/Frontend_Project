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
                this.isLoading = true;
                axios.post("https://jsonplaceholder.typicode.com/users", this.newUserInfo)
                    .then((res) => {
                        if(res.status == 201) {
                            this.mainUsers.push(res.data);
                            this.showAddModal = false;
                            this.handleResetForm();  // Call the reset function here
                            this.pagination();
                            M.toast({html: 'کاربر با موفقیت ایجاد شد', classes: 'rounded green'});
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
            },
            handleResetForm(){
                this.newUserInfo = {
                    name: "",
                    username: "",
                    email: "",
                };
            
                // Reset MaterializeCSS labels
                M.updateTextFields();
            
                // Remove 'active' class from labels to reset them visually
                document.querySelectorAll('.input-field label').forEach(label => {
                    label.classList.remove('active');
                });
            
                // Remove the custom data attribute from inputs
                document.querySelectorAll('input').forEach(input => {
                    if (input.hasAttribute('data-listener-added_96d883de')) {
                        input.removeAttribute('data-listener-added_96d883de');
                    }
                });
            },
            handleDeleteUser(userId){
                var toastHTML = '<span>ایا از حذف کاربر ('+userId+')اطمینان دارید؟</span><button class="btn-flat toast-action" x-on:click="handleConfirmDeleteUser('+userId+')">بله</button>';
                M.toast({html: toastHTML});
            },
            handleConfirmDeleteUser(userId){
                // alert(userId);
                this.isLoading = true
                axios.delete("https://jsonplaceholder.typicode.com/users/"+userId)
                .then((res) => {
                    if(res.status == 200) {
                       this.mainUsers =  this.mainUsers.filter(user=>user.id != userId)
                       this.users =  this.users.filter(user=>user.id != userId)
                       this.pagination()
                        M.toast({html: 'کاربر با موفقیت حذف شد', classes: 'green'});                        
                    }
                }).finally(() => {
                    this.isLoading = false;
                });
            }
            

            
        }
    })
})