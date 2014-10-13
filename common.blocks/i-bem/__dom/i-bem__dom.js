modules.define('i-bem__dom', function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        addMix: function(mix) {
            // TODO: support mix as {}
            if(typeof mix === 'string') {
                this.domElem.addClass(mix);
            }
            return this;
        },
        delMix: function(mix) {
            // TODO: support mix as {}
            this.domElem.removeClass(mix);
            return this;
        },
        toggleMix: function(mix) {
            this.domElem.toggleClass(mix);
            return this;
        }
    }));
});
