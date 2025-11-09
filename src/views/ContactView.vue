<template>
<FormComponent/>
<SocialFooter/>
</template>

<script>

import FormComponent from '@/components/FormComponent.vue';
import SocialFooter from '@/components/SocialFooter.vue';

export default{
    name:'ContactView',

    components:{
        FormComponent,
        SocialFooter
    }
};
</script>