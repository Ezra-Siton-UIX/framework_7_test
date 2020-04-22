<template>
    <f7-page name="about">
        <f7-navbar title="About" back-link="Back"></f7-navbar>
    
    
        <f7-row>
            <f7-col width="100" medium="50">
                <f7-card expandable content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."></f7-card>
            </f7-col>
            <f7-col width="100" medium="50">
                <f7-card expandable content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."></f7-card>
            </f7-col>
        </f7-row>
    
    
        <f7-row>
            <f7-col width="50" medium="50">
    
            </f7-col>
            <f7-col width="50" medium="50">
                <f7-card style="width: 100%;" expandable expandable-animate-width>
                    <f7-card-content :padding="true">
                        <div class="bg-color-red" :style="{height: '300px'}">
                            <f7-card-header text-color="black" class="display-block">
                                {{msg}}
                                <br/>
                                <small :style="{opacity: 0.7}">Build Mobile Apps</small>
                            </f7-card-header>
                            <f7-link card-close color="black" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="multiply_circle_fill"></f7-link>
                        </div>
                        <div class="card-content-padding">
                            <p>S systems - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
    
                        </div>
                    </f7-card-content>
                </f7-card>
            </f7-col>
        </f7-row>
    
        <f7-block-title>About My App</f7-block-title>
        <f7-block strong>
            <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
            <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
        </f7-block>
        <f7-block>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
            <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
            <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
        </f7-block>
    </f7-page>
</template>

<script>
export default {
    data: function() {
        return {
            msg: "Hello World"
        }
    },
};
</script>