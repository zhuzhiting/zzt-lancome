const shopCarFunc = (function () {
    return {

        
        init () {
            this.shopData = []; //购物车数据，默认为一个数组
            this.sum = 0;
            this.event();
        },       
        event () {
            var oThis = this;
            this.getShopListData();// 获取购物车数据
        },


        // 渲染数据
        innerCarData () {

            var _this = this;
            $('.shopcar-list-body').empty();
            $('.shopcar-totalprice').html('￥0.00');

            this.shopData.forEach((item, index) => {
                var $trDom = $(`<tr>
                    <td><img src="${item.product_img}" alt="图片"></td>
                    <td>${item.product_name}</td>
                    <td>${item.product_price}</td>
                    <td>${item.product_num}</td>
                    <td class="del-shop">删除</td>
                </tr>`).appendTo($('.shopcar-list-body'));

                $trDom.find('.del-shop').on('click', function (ev) {
                    var ev = ev || window.event;
                    $(this).parent().remove();
                    _this.delShopListData(item.product_id);
                })
                
                this.sum += item.product_price * item.product_num;
                $('.shopcar-totalprice').html('￥' + this.sum + '.00元');
                console.log($('.shopcar-totalprice'),this.sum)
            });

        },


        getShopListData () {
            var _this = this;

            $.ajax({
                url:'http://localhost/LC/lancome/interface/getshoplist.php?flag=car',
                type:'get',

                success:function(res){
                    res = JSON.parse(res);
                    if (res.code === 1) {
                        _this.shopData = res.data;
                        _this.innerCarData(); // 渲染购物车数据
                    } else {
                        alert('请求失败!');
                    }
                },

                error:function (err) {
                    alert('请求失败!');
                }
            })
        },

        /* 删除购物车数据 */
        delShopListData (id) {
            var _this = this;

            $.ajax({
                url:`http://localhost/LC/lancome/interface/getshoplist.php?flag=del&id=${id}`,
                type:'get',

                success:function(res){
                    res = JSON.parse(res);
                    if (res.code === 1) {
                        alert('删除成功!');
                        _this.getShopListData(); // 渲染购物车数据
                    } else {
                        alert('删除失败!');
                    }
                },

                error:function (err) {
                    alert('删除失败!');
                }
            })
        }

    }

}())