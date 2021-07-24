function init() {
    Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSJwXEKoxNt73ZVl2xMmKh_JmyJ-zIRNcsnVMLOVLClXToHQFQ02EeGMSApsTZiEXc_UcTJb5zdTBEh/pubhtml',
    
    callback: function(data, tabletop) {
    console.log(data)
    },
    simpleSheet: true } )
    }
    window.addEventListener(‘DOMContentLoaded’, init)