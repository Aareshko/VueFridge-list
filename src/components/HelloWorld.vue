<template>
    <div class="row">
        <div class="row col-md-4 col-md-offset-8">
            <button class="btn btn-primary" @click="save">Add New List </button>
        </div>
        <div class="row col-md-4">
            <label>Fridge: </label>
            <select @change="showfridge" v-model="fridge" >
                <option>Fridge1</option>
                <option>Fridge2</option>
            </select>
        </div>
        <div class="row body" style="margin-top:20px">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Box</th>
                    <!-- <th>Input Date</th> -->
                    <th>Count</th>
                </thead>
                <tbody>
                    <tr v-for="tdlist in result1" :key="tdlist" class="box1">
                        <td>{{tdlist.name}}</td>
                        <td>{{tdlist.box}}</td>
                        <td>{{tdlist.count}}</td>
                    </tr>

                    <tr v-for="tdlist in result2" :key="tdlist" class="box2">
                        <td>{{tdlist.name}}</td>
                        <td>{{tdlist.box}}</td>
                        <td>{{tdlist.count}}</td>
                    </tr>
                </tbody>
            </table>
         </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data: function () {
        var Fridge1 = firebase.database().ref('Fridge1');
        var Fridge2 = firebase.database().ref('Fridge2');
            this.fridge= 'Fridge1';
        setTimeout(function(){
            $('.box1').show();
            $('.box2').hide();
        },1500)
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
        save(){
            this.$router.push('/savedata');
        },
        showfridge(){
            if(this.fridge == 'Fridge1'){
                $('.box1').show();
                $('.box2').hide();
            }else{
                $('.box1').hide();
                $('.box2').show();
            }
        },
    }
}
</script>
<style>
    table{
        width:100%
    }
    th{
        background-color:ghostwhite
    }
    .btn-primary{
        width:120px;
        font-weight: bold;
        text-align: center;
        color:white
    }
    table{
        margin-top:65px;
    }
    th{
        text-align: center;
        height: 50px;
    }
</style>