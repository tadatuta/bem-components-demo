modules.define('animation', ['i-bem__dom', 'tick', 'jquery', 'keyboard__codes'], function(provide, BEMDOM, Tick, $, keyCodes) {
    var _cache = {};

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var _this = this;

                    this.prevFrameNumber = 0;
                    this.frameNumber = this.params.startFrame || 0;
                    this.counter = 0;

                    this.bindToWin('keypress', function(e) {
                        var keyCode = e.keyCode;
                        keyCode == keyCodes.LEFT && this.go('prev');
                        keyCode == keyCodes.RIGHT && this.go('next');
                        keyCode == keyCodes.ESC && this.stop();
                        keyCode == keyCodes.ENTER && this.start();
                    });

                    this.start();
                }
            }
        },
        getDefaultParams: function() {
            return { frameTime: 10 };
        },
        animate: function(action) {
            if (!action) return;
            // TODO: получать блок по селектору
            var key = action.selector + (action.entity || ''),
                block = _cache[key] || (_cache[key] = $('.' + action.selector).bem(action.entity || action.selector)),
                mods = action.mods,
                methods = action.methods,
                isForward = this.frameNumber >= this.prevFrameNumber;

            mods && Object.keys(mods).forEach(function(mod) {
                block.setMod(mod, mods[mod][isForward ? 1 : 0]);
            });

            methods && Object.keys(methods).forEach(function(method) {
                var methodVals = methods[method];

                block[method](typeof methodVals === 'string' ?
                    methodVals : methodVals[isForward ? 1 : 0]);
            });

            return this;
        },
        go: function(direction) {
            this.prevFrameNumber = this.frameNumber;
            this.frameNumber += 1 * (direction === 'next' ? 1 : -1);
            this.render();

            return this;
        },
        render: function() {
            var timeline = this.params.timeline,
                frameNumber = this.frameNumber,
                currentFrame = timeline[frameNumber - 1];

            if(!currentFrame) return;


            frameNumber >= timeline.length && this.stop();

            var actions = currentFrame.actions;

            this.frameTime = currentFrame.duration;
            Array.isArray(actions) ? actions.forEach(this.animate, this) : this.animate(actions);

            return this;
        },
        start: function() {
            Tick.on('tick', this._onTick, this);
            Tick.start();

            return this;
        },
        stop: function() {
            Tick.un('tick'); // TODO: get rid of Tick.un after tick fixed
            Tick.stop();

            return this;
        },
        _onTick: function() {
            this.counter++;

            this.counter % (this.frameTime || this.params.frameTime) === 0 && this._step();
        },
        /*
        * Вычисляет, когда переходить на следующий кадр в зависимости от duration
        */
        _step: function() {
            Math.floor(this.counter / (this.frameTime || this.params.frameTime)) && this.go('next');
        }
    }))
});
