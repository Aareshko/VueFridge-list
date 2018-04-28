<template>
    <div>
        <div class="row">
            <h4>Move groceries between Fridge 1 and Fridge 2</h4>
            <div class="col-md-5">
                <label>Fridge1</label><br>
                <ul>
                    <li v-for="tdlist in result1" :key="tdlist">{{tdlist.name}}</li>
                </ul>
            </div>
            <div class="col-md-2">
                <label>Fridge1</label><br>
                <br><br><br>
                <button class="btn btn-warning" @click="save">To Right</button>
                <br><br><br>
                <button class="btn btn-warning" @click="cancel">To Left</button>
            </div>
            <div class="col-md-5">
            <label>Fridge2</label><br>
                <ul>
                    <li v-for="tdlist in result2" :key="tdlist">{{tdlist.name}}</li>
                </ul>
            </div>
        </div>
        <div class="row" style="margin-top:50px">
            <button class="btn btn-success" @click="save">Save</button>
            <button class="btn btn-primary" @click="cancel">Cancel</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'move',
    data: function () {
        var Fridge1 = firebase.database().ref('Fridge1');
        var Fridge2 = firebase.database().ref('Fridge2');
        var data = [];
        var data1 = [];
        Fridge1.on('value', function(snapshot) {
            snapshot.forEach(function(child){
                var i=0;
                child.forEach(function(){
                    i++;
                })
                data.push({'name':child.key,'count':i,'box':'Fridge1'})
            })
        })
        Fridge2.on('value', function(snapshot1) {
            snapshot1.forEach(function(child1){
                var j=0;
                child1.forEach(function(){
                    j++;
                })
                data1.push({'name':child1.key,'count':j,'box':'Fridge2'})
            })
        })
        return {'result1':data, 'result2':data1};
    },
    methods: {
        cancel(){
            this.$router.push('/');
        },
        save(){
            // var qtdetails = {'date':this.date, 'fridge':this.fridge, 'name': this.listname};//Questions
			// var rootRef = firebase.database().ref();
			// var storesRef = rootRef.child(this.fridge+'/'+this.listname);
			// var newStoreRef = storesRef.push();//Add record to Question table in fireabse
			// newStoreRef.set(qtdetails).then(function(){
			// })
            // console.log(firebase)
        }
    }
}
</script>
<style>
   li{ 
       list-style: none;
       font-size:20px;
       cursor: pointer;
    }
    label{
        margin-left:50px;
    }
    ul{
        margin-top:20px;
    }
</style>