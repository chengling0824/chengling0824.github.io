function mdToHtml(blogUrl){
    $.ajax({
        type:"get", 
        url: encodeURI(encodeURI("../../"+blogUrl)), 
        dataType:"text",
        async:false,
        success:function(content) {
            //先对容器初始化，在需要展示的容器中创建textarea隐藏标签，
            $("#testEditorMdview").html('<textarea id="appendTest" style="display:none;"></textarea>');

            // var content=$("#demo1").val();//获取需要转换的内容

            $("#appendTest").val(content);//将需要转换的内容加到转换后展示容器的textarea隐藏标签中

            //转换开始,第一个参数是上面的div的id
            editormd.markdownToHTML("testEditorMdview", {
                htmlDecode: "style,script,iframe", //可以过滤标签解码
                emoji: true,
                taskList:true,
                tex: true,               // 默认不解析
                flowChart:true,         // 默认不解析
                sequenceDiagram:true,  // 默认不解析
            });
            
        },
        error:function() {
            alert("文章请求失败");
        }
    });

    
}

