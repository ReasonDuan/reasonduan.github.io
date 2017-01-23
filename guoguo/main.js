
        var _speedMark = new Date();
        function init_viewport()
        {
            if(/Android (\d+\.\d+)/.test(navigator.userAgent))
            {
                var version = parseFloat(RegExp.$1);

                if(version>2.3)
                {
                    var width = window.outerWidth == 0 ? window.screen.width : window.outerWidth;
                    var phoneScale = parseInt(width)/500;
                    // if(phoneScale < 2)
                    // {
                        document.write('<meta name="viewport" content="width=500, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
                        
                    // }
                    // else
                    // {
                    //     document.write('<meta name="viewport" content="target-densitydpi=320, width=500, min-height:850px, user-scalable=no"/>');
                    // }
                }
                else
                {
                    document.write('<meta name="viewport" content="width=500, target-densitydpi=device-dpi">');    
                }
            }
            else if(navigator.userAgent.indexOf('iPhone') != -1)
            {
                var phoneScale = parseInt(window.screen.width)/500;
                document.write('<meta name="viewport" content="width=500; min-height=750;initial-scale=' + phoneScale +'; user-scalable=no;" /> ');         //0.75   0.82
            }
            else 
            {
                document.write('<meta name="viewport" content="width=500, height=750, initial-scale=0.64" /> ');         //0.75   0.82

            }
        }

        init_viewport();


            var module_inits = [];

            var upload_permission = true;
            var atkname = 'huali';

            wx.config({
                debug     : false,
                appId     : 'wx17512612411a3882',
                timestamp : 10000,
                nonceStr  : 'hellohuali',
                signature : '81ed3ee35d915f3831ee2052f788c68b42b98581',
                jsApiList : [
                    'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'closeWindow', 'hideAllNonBaseMenuItem', 'showMenuItems', 'showAllNonBaseMenuItem', 'chooseImage', 'uploadImage']
                });
            
            function load_init_modules()
            {
                for(var i=0; i<module_inits.length; i++)
                {
                    module_inits[i]();
                }
            }

            function call_me(fun)
            {
                module_inits.push(fun);
            }

            var ua = navigator.userAgent.toLowerCase();  

            if(ua.match(/MicroMessenger/i) == 'micromessenger')
            {  
                wx.ready(load_init_modules);
            }
            else
            {
                onload = load_init_modules;
            }

