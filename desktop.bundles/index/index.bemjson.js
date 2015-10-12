({
    block: 'page',
    title: 'bem-components',
    favicon: 'favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mods: { theme: 'islands' },
    mix: {
        block: 'animation',
        js: {
            // startFrame: 10,
            frameTime: 10,
            timeline: [
                {
                    duration: 30
                    // TODO: поддержать шаг назад
                },
                {
                    actions: [
                        {
                            selector: 'title',
                            // entity: 'title',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'button',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'page',
                            mods: { step: ['', 2] }
                        }
                    ]
                },
                {
                    actions: [
                        {
                            selector: 'button',
                            methods: {
                                setText: ['Кнопка', 'Сохранить']
                            }
                        }
                    ]
                },
                {
                    actions: {
                        selector: 'button',
                        mods: {
                            view: ['', 'action']
                        },
                        methods: {
                            setText: ['Сохранить', 'Заказать']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'button',
                        methods: {
                            setText: ['Заказать', 'Купить']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'button',
                        mods: {
                            view: ['action', '']
                        },
                        methods: {
                            setText: ['Купить', 'Отправить']
                        }
                    }
                },
                {
                    actions: [
                        {
                            selector: 'input',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'button',
                            methods: {
                                setText: ['Отправить', 'Найти']
                            }
                        }
                    ]
                },
                {
                    actions: {
                        selector: 'input',
                        mods: {
                            focused: ['', true]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'input',
                        methods: {
                            setVal: ['', 'Конструктор для детей']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'input',
                        methods: {
                            setVal: ['Конструктор для детей', 'Конструктор для ']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'input',
                        methods: {
                            setVal: ['Конструктор для ', 'Конструктор для веб-разработчиков']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'checkbox',
                        methods: {
                            toggleMix: 'invisible'
                        }
                    }
                },
                {
                    actions: {
                        selector: 'checkbox',
                        mods: {
                            focused: ['', true]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'checkbox',
                        mods: {
                            checked: ['', true]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'select',
                        methods: {
                            toggleMix: 'invisible'
                        }
                    }
                },
                {
                    actions: {
                        selector: 'select',
                        mods: {
                            opened: ['', true]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'select',
                        methods: {
                            setVal: [1, 2]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'select',
                        mods: {
                            opened: [true, '']
                        }
                    }
                },
                {
                    actions: {
                        selector: 'radio-group',
                        methods: {
                            toggleMix: 'invisible'
                        }
                    }
                },
                {
                    actions: {
                        selector: 'radio-group',
                        methods: {
                            setVal: [undefined, 1]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'button',
                        mods: {
                            focused: ['', true],
                            pressed: ['', true]
                        }
                    }
                },
                {
                    actions: [
                        {
                            selector: 'spin',
                            mods: {
                                visible: ['', true]
                            }
                        },
                        {
                            selector: 'button',
                            mods: {
                                pressed: ['true', '']
                            }
                        }
                    ]
                },
                {
                    actions: [
                        {
                            selector: 'spin',
                            mods: {
                                visible: [true, '']
                            }
                        },
                        {
                            selector: 'serp',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        }
                    ],
                    duration: 50
                },
                {
                    actions: {
                        selector: 'radio-group',
                        methods: {
                            setVal: [1, 2]
                        }
                    }
                },
                {
                    actions: {
                        selector: 'button',
                        mods: {
                            focused: ['', true],
                            pressed: ['', true]
                        }
                    }
                },
                {
                    actions: [
                        {
                            selector: 'spin',
                            mods: {
                                visible: ['', true]
                            }
                        },
                        {
                            selector: 'button',
                            mods: {
                                pressed: ['true', '']
                            }
                        },
                        {
                            selector: 'serp',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        }
                    ]
                },
                {
                    actions: [
                        {
                            selector: 'spin',
                            mods: {
                                visible: [true, '']
                            }
                        },
                        {
                            selector: 'serp2',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        }
                    ],
                    duration: 50
                },
                {
                    actions: [
                        {
                            selector: 'button',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'input',
                            methods: {
                                toggleMix: 'invisible',
                                setVal: ['Конструктор для веб-разработчиков', '']
                            }
                        },
                        {
                            selector: 'checkbox',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'select',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'radio-group',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'serp2',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        },
                        {
                            selector: 'final',
                            methods: {
                                toggleMix: 'invisible'
                            }
                        }
                    ]
                }
            ]
        }
    },
    content: [
        {
            block: 'overlay',
            content: [
                {
                    block: 'title',
                    tag: 'h1',
                    content: [
                        'Собрать сайт как конструктор Лего?',
                        { tag: 'br' },
                        'Что может быть проще!'
                    ]
                },
                {
                    block: 'input',
                    mods : { theme : 'islands', size : 'xl', 'has-clear': true },
                    mix: { block: 'invisible' }
                    // TODO: add hint
                },
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'xl' },
                    mix: { block: 'invisible' },
                    text : 'Кнопка',
                    js : { live: false }
                },
                {
                    block: 'row',
                    content: {
                        block : 'checkbox',
                        text : 'Картинки',
                        name: 'normal',
                        val: '3',
                        mods : { theme : 'islands', size : 'l' },
                        mix: { block: 'invisible' }
                    }
                },
                {
                    block: 'row',
                    content: [
                        {
                            block : 'select',
                            mods : { mode : 'radio', theme : 'islands', size : 'xl' },
                            mix: { block: 'invisible' },
                            name : 'select1',
                            options : [
                                { val : 1, text : 'Любые', checked : true },
                                { val : 2, text : 'Большие' },
                                { val : 3, text : 'Средние' },
                                { val : 3, text : 'Маленькие' },
                            ]
                        },
                        {
                            block : 'radio-group',
                            name : 'normal1',
                            mods : { theme : 'islands', size : 'xl', type: 'button' },
                            mix: { block: 'invisible' },
                            options : [
                                { val : 1, text : 'Черно-белые' },
                                { val : 2, text : 'Цветные' }
                            ]
                        }
                    ]
                },
                {
                    content: {
                        block : 'spin',
                        mods : { theme : 'islands', size : 'l', visible : false }
                    }
                },
                {
                    block: 'row',
                    content: [
                        {
                            block: 'serp',
                            mix: { block: 'invisible' },
                            content: [
                                {
                                    block: 'image',
                                    attrs: { style: 'width: 50%' },
                                    url: 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_batman.png'
                                }
                            ]
                        },
                        {
                            block: 'serp2',
                            mix: { block: 'invisible' },
                            content: [
                                {
                                    block: 'image',
                                    attrs: { style: 'width: 50%' },
                                    url: 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_robin.png'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'final',
                    mix: { block: 'invisible' },
                    content: [
                        {
                            tag: 'h1',
                            content: 'bem-components'
                        },
                        {
                            tag: 'h2',
                            content: 'библиотека готовых компонентов'
                        },
                        {
                            tag: 'h2',
                            content: {
                                block: 'link',
                                url: 'https://ru.bem.info/',
                                content: 'ru.bem.info'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
