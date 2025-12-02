import React, { useId, useState } from 'react';

// Tabbed metrics component ready to be embedded in an MDX file
// Usage in MDX: import MetricsTabs from './metrics.tsx'
// Then in MDX: <MetricsTabs />

export default function MetricsTabs() {
    const id = useId();
    const [active, setActive] = useState('mobile');

    const tabs = [
        { key: 'mobile', label: 'Mobile' },
        { key: 'desktop', label: 'Desktop' },
    ];

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLButtonElement>,
        index: number
    ) => {
        if (e.key === 'ArrowRight') {
            const next = (index + 1) % tabs.length;
            setActive(tabs[next].key);
            document.getElementById(`${id}-tab-${tabs[next].key}`)?.focus();
        }
        if (e.key === 'ArrowLeft') {
            const prev = (index - 1 + tabs.length) % tabs.length;
            setActive(tabs[prev].key);
            document.getElementById(`${id}-tab-${tabs[prev].key}`)?.focus();
        }
    };

    const metrics = {
        mobile: [
            { icon: '🚀', label: 'Performance', value: '92/100', note: '' },
            { icon: '♿', label: 'Accessibilité', value: '91/100', note: '' },
            { icon: '💡', label: 'Bonne pratique', value: '100/100', note: '' },
            { icon: '📱', label: 'SEO', value: '100/100', note: '' },
            {
                icon: '⚡',
                label: 'First Contentful Paint',
                value: '<1s',
                note: '',
            },
        ],
        desktop: [
            { icon: '🚀', label: 'Performance', value: '100/100', note: '' },
            { icon: '♿', label: 'Accessibilité', value: '91/100', note: '' },
            { icon: '💡', label: 'Bonne pratique', value: '100/100', note: '' },
            { icon: '📱', label: 'SEO', value: '100/100', note: '' },
            {
                icon: '⚡',
                label: 'First Contentful Paint',
                value: '<1s',
                note: '',
            },
        ],
    };

    return (
        <div className="w-full my-8">
            <div
                role="tablist"
                aria-label="Choix de vue"
                className="inline-flex rounded-2xl p-[2px] bg-muted/50 dark:bg-muted/30  border border-border backdrop-blur-sm"
            >
                {tabs.map((t, i) => (
                    <button
                        id={`${id}-tab-${t.key}`}
                        key={t.key}
                        role="tab"
                        aria-selected={active === t.key}
                        aria-controls={`${id}-panel-${t.key}`}
                        tabIndex={active === t.key ? 0 : -1}
                        onClick={() => setActive(t.key)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 ${
                            active === t.key
                                ? 'bg-card text-foreground shadow-sm border border-border'
                                : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                <section
                    id={`${id}-panel-mobile`}
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-mobile`}
                    hidden={active !== 'mobile'}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6">
                        Métriques de performance — Mobile
                    </h3>
                    <ul className="space-y-4">
                        {metrics.mobile.map((metric, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-4 text-base text-foreground"
                            >
                                <span
                                    className="text-2xl leading-none"
                                    aria-hidden="true"
                                >
                                    {metric.icon}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <strong className="font-semibold text-foreground">
                                            {metric.label}
                                        </strong>
                                        <span className="text-primary font-medium">
                                            {metric.value}
                                        </span>
                                        {metric.note && (
                                            <span className="text-sm text-muted-foreground">
                                                {metric.note}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section
                    id={`${id}-panel-desktop`}
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-desktop`}
                    hidden={active !== 'desktop'}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6">
                        Métriques de performance — Desktop
                    </h3>
                    <ul className="space-y-4">
                        {metrics.desktop.map((metric, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-4 text-base text-foreground"
                            >
                                <span
                                    className="text-2xl leading-none"
                                    aria-hidden="true"
                                >
                                    {metric.icon}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <strong className="font-semibold text-foreground">
                                            {metric.label}
                                        </strong>
                                        <span className="text-primary font-medium">
                                            {metric.value}
                                        </span>
                                        {metric.note && (
                                            <span className="text-sm text-muted-foreground">
                                                {metric.note}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
